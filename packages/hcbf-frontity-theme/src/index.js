import React from "react";
import { connect } from "frontity";
import Root from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

import fullImage from "./processors/fullImage";
import largeImage from "./processors/largeImage";
import contactForm from "./processors/contactForm";
import animateFunding from "./processors/animateFunding";
import latestPosts from "./processors/latestPosts";
import carousel from "./processors/carousel";
import ourVision from "./processors/ourVision";
import teamBios from "./processors/teamBios";
import timeline from "./processors/timeline";
import studies from "./processors/studies";
import pieChart from "./processors/pieChart";
import financials from "./processors/financials";
import meetingInfo from "./processors/meetingInfo";
import meetingDropdown from "./processors/meetingDropdown";
import meetingMinutes from "./processors/meetingMinutes";
import dataTable from "./processors/dataTable";

import menuHandler from "./components/handlers/menu-handler";
import acfHandler from "./components/handlers/acf-handler";

const Theme = {
  name: "hcbf-frontity-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      menuUrl: 'header-menu',
      aboutSubmenuUrl: 'about',
      meetingsPage: {
        slug: 'meetings',
        id: 196,
      },
      grantsPage: {
        slug: 'grants',
        id: 20,
        granteeLogos: []
        },
    },
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions, libraries }) => {
        // Fetch menu for header
        await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);

        // Fetch Submenu for About Us subpages
        const currentUrl = state.router.link;
        const array = currentUrl.split('/').filter(index => index !== "");
        const parentPage = array[0];
        await actions.source.fetch(`/menu/${state.theme.aboutSubmenuUrl}`);

        // Fetch Contact Form for Home Page
        if (state.router.link === "/") {
          // Stop the server-side rendering (SSR) until this is ready.
          await actions.source.fetch("/contact-form");
        }

        // Fetch Blog Content for non-post related content on Blog page
        if (state.router.link === "/blog/") {
          // Stop the server-side rendering (SSR) until this is ready.
          await actions.source.fetch("/blog-content");
        }

        // Fetch Meeting Information for Home and Board Meetings Pages
        await actions.source.fetch(`/acf/${state.theme.meetingsPage.id}`);

        // Fetch Grants data for Grants Page
        await actions.source.fetch(`/acf/${state.theme.grantsPage.id}`, {
          headers: {
            "Access-Control-Allow-Origin": "https://kyles-test-site.vercel.app"
          },
        });
        const categoryID = state.source.get(`/acf/${state.theme.grantsPage.id}`).items['grantee_logos'][0];
        const { api } = libraries.source;
        const response = await api.get({
          endpoint: `/wp/v2/media?media_folder=${categoryID}`
        });
        const grantees = await libraries.source.populate({ response, state, force: true });
        state.theme.grantsPage.granteeLogos = grantees;

      },
      beforeCSR: ({ state, actions }) => async () => {
        // Fetch Submenu for About Us subpages
        const currentUrl = state.router.link;
        const array = currentUrl.split('/').filter(index => index !== "");
        const parentPage = array[0];
        await actions.source.fetch(`/menu/${state.theme.aboutSubmenuUrl}`);
      }
    },
  },
  libraries: {
    html2react: {
      processors: [
        image,
        iframe,
        link,
        fullImage,
        largeImage,
        contactForm,
        carousel,
        ourVision,
        teamBios,
        timeline,
        studies,
        pieChart,
        financials,
        animateFunding,
        latestPosts,
        meetingInfo,
        meetingDropdown,
        meetingMinutes,
        dataTable,
      ],
    },
    source: {
      handlers: [
        menuHandler,
        acfHandler,
      ],
    },
  },
};

export default Theme;
