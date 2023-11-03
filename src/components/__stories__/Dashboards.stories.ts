import { Meta, StoryObj } from "@storybook/vue3";
import DashboardsVue from "../DashBoards.vue";

const meta = {
    title: 'DashBoards',
    component: DashboardsVue,
} satisfies Meta;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default = () => ({
  components: { DashboardsVue },
  template: '<Dashboards />',
});

export const WithUserProfile = () => ({
  components: { DashboardsVue },
  template: '<Dashboards :profileImageUrl="\'profile.jpg\'" :username="\'Dipshika\'" />',
});


export const WithNotifications = () => ({
  components: { DashboardsVue },
  template: '<Dashboards :profileImageUrl="\'profile.jpg\'" :username="\'Dipshika\'" />',
});
