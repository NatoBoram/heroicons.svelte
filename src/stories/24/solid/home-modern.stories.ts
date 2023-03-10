import type { Meta, StoryObj } from '@storybook/svelte'
import HomeModernSvelte from '../../../lib/24/solid/home-modern.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: HomeModernSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HomeModernSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HomeModern: Story = {}
