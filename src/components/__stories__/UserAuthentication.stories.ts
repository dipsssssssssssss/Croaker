import { Meta, StoryObj } from "@storybook/vue3";
import UserAuthentication from "../UserAuthentication.vue";

const meta = {
    title: 'UserAuthentication',
    component: UserAuthentication,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserAuthenticationSignIn: Story = {};