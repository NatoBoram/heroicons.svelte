import type { Meta, StoryObj } from '@storybook/svelte'
import { InformationCircle as InformationCircleSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: InformationCircleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<InformationCircleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const InformationCircle: Story = {}
