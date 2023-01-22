import type { Meta, StoryObj } from '@storybook/svelte'
import InformationCircleSvelte from '../../../lib/20/solid/information-circle.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: InformationCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<InformationCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InformationCircle: Story = {}
