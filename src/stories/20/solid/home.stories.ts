import type { Meta, StoryObj } from '@storybook/svelte'
import HomeSvelte from '../../../lib/20/solid/home.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: HomeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HomeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = {}
