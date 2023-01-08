import type { Meta, StoryObj } from '@storybook/svelte'
import { HomeModern as HomeModernSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: HomeModernSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HomeModernSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HomeModern: Story = {}
