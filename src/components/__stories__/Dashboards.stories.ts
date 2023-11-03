import { Meta, StoryObj } from '@storybook/vue3';
import Dashboard from '../DashBoards.vue';

const meta = {
  title: 'Dashboard',
  component: Dashboard,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => ({
  components: { Dashboard },
  template: '<Dashboard />',
});

export const WithUserProfile = () => ({
  components: { Dashboard },
  template: '<Dashboard :profileImageUrl="\'profile.jpg\'" :username="\'Dipshika\'" />',
});

export const WithNotifications = () => ({
  components: { Dashboard },
  template: '<Dashboard :profileImageUrl="\'profile.jpg\'" :username="\'Dipshika\'" />',
});
