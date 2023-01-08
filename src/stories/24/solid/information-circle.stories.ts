import type { Meta, StoryObj } from '@storybook/svelte'
import { InformationCircle as InformationCircleSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: InformationCircleSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<InformationCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InformationCircle: Story = {}
