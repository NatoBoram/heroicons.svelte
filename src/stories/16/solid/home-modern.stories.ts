import type { Meta, StoryObj } from '@storybook/svelte'
import HomeModernSvelte from '../../../lib/16/solid/home-modern.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: HomeModernSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<HomeModernSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HomeModern: Story = {}
