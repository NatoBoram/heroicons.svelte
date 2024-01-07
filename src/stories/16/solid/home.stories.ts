import type { Meta, StoryObj } from '@storybook/svelte'
import HomeSvelte from '../../../lib/16/solid/home.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: HomeSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<HomeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = {}
