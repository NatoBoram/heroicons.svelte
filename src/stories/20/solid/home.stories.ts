import type { Meta, StoryObj } from '@storybook/svelte'
import { Home as HomeSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: HomeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HomeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = {}
