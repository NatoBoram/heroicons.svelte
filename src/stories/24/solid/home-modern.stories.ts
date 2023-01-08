import type { Meta, StoryObj } from '@storybook/svelte'
import { HomeModern as HomeModernSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: HomeModernSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<HomeModernSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HomeModern: Story = {}
