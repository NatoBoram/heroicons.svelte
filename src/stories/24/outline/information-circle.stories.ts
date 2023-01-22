import type { Meta, StoryObj } from '@storybook/svelte'
import InformationCircleSvelte from '../../../lib/24/outline/information-circle.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: InformationCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<InformationCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InformationCircle: Story = {}
