import type { Meta, StoryObj } from '@storybook/svelte'
import { HandThumbUp as HandThumbUpSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: HandThumbUpSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<HandThumbUpSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const HandThumbUp: Story = {}
