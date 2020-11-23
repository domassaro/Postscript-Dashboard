import React, { useEffect, useReducer } from 'react';
import { getData } from './api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarHeader from './components/NavbarHeader';
import CampaignPage from './components/CampaignPage';
import CreateCampaignPage from './components/CreateCampaignPage';
import MainContent from './components/MainContent';
import Spinner from 'react-bootstrap/Spinner'
import Sidebar from "./components/Sidebar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

export const PageContxt = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'setData':
      return {
        ...state,
        campaigns: action.payload.campaigns,
        segments: action.payload.segments,
      };

    case 'addDraftMediaLink':
      return {
        ...state,
        draftCampaign: {
            ...state.draftCampaign,
            media: action.payload.media,
        }
      }

    case 'addDraftTitle':
      return {
        ...state,
        draftCampaign: {
            ...state.draftCampaign,
            name: action.payload.name,
        }
      }

    case 'addMediaLink':
      return {
        ...state,
        campaigns: {
          ...state.campaigns,
          [action.payload.campaignId]: {
            ...state.campaigns[action.payload.campaignId],
            media: action.payload.media,
          }
        }
      }

    case 'changeCampaignName':
      return {
        ...state,
        campaigns: {
          ...state.campaigns,
          [action.payload.campaignId]: {
            ...state.campaigns[action.payload.campaignId],
            name: action.payload.name,
          }
        }
      }

    case 'changeDraftSegment':
      return {
        ...state,
        draftCampaign: {
            ...state.draftCampaign,
            segment_id: action.payload.segment_id,
        }
      }

    case 'changeSegment':
      return {
        ...state,
        campaigns: {
          ...state.campaigns,
          [action.payload.campaignId]: {
            ...state.campaigns[action.payload.campaignId],
            segment_id: action.payload.segment_id,
          }
        }
      }

    case 'addDraftCampaignTags':
      return {
        ...state,
        draftCampaign: {
            ...state.draftCampaign,
            text: action.payload.text,
        }
      }

    case 'changeDraftCampaignText':
      return {
        ...state,
        draftCampaign: {
            ...state.draftCampaign,
            text: action.payload.text,
        }
      }

    case 'changeCampaignText':
      return {
        ...state,
        campaigns: {
          ...state.campaigns,
          [action.payload.campaignId]: {
            ...state.campaigns[action.payload.campaignId],
            text: action.payload.text,
          }
        }
      }

    case 'addCampaignTags':
      return {
        ...state,
        campaigns: {
          ...state.campaigns,
          [action.payload.campaignId]: {
            ...state.campaigns[action.payload.campaignId],
            text: action.payload.text,
          }
        }
      }
    case 'createNewDraftCampaign': 
      return {
        ...state,
        draftCampaign: action.payload.campaign,
      }

    case 'createNewCampaign':
      return {
        ...state,
        campaigns: {
          ...state.campaigns,
          [action.payload.campaign.id]: action.payload.campaign,
        },
      };

    default:
      return state;
  } 
}

const initialState = {
  campaigns: {},
  segments: {},
  draftCampaign: {},
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    const data = await getData();
    dispatch({
      type: 'setData',
      payload: data,
    });
  }, []);

  // Loader
  if (Object.keys(state.campaigns).length === 0) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <PageContxt.Provider value={{ state, dispatch }}>
      <Router>
        <Route
          exact
          path="/"
          render={() => {
              return (
                  <Redirect to="/home" />
              )
          }}
        />
        <NavbarHeader />
        <Container fluid>
          <Row className="flex-nowrap equal row">
            <Sidebar />
            <Col className="w-100">
              <Route path="/home">
                <MainContent />
              </Route>
              <Route exact path="/campaigns">
                <MainContent />
              </Route>
              <Route path="/campaigns/:id">
                <CampaignPage />
              </Route>
              <Route path="/campaign/create/:id">
                <CreateCampaignPage />
              </Route>
            </Col>
          </Row>
        </Container>
      </Router>
    </PageContxt.Provider>
  );
}

export default App;
