import type { Meta, StoryObj } from '@storybook/svelte'
import HomeSvelte from '../../../lib/24/outline/home.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: HomeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HomeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = {}
