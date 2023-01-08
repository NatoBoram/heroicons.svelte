import type { Meta, StoryObj } from '@storybook/svelte'
import { Home as HomeSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: HomeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HomeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Home: Story = {}
