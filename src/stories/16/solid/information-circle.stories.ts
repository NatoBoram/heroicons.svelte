import type { Meta, StoryObj } from '@storybook/svelte'
import InformationCircleSvelte from '../../../lib/16/solid/information-circle.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: InformationCircleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<InformationCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InformationCircle: Story = {}
