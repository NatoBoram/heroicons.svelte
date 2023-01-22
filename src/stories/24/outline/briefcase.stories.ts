import type { Meta, StoryObj } from '@storybook/svelte'
import BriefcaseSvelte from '../../../lib/24/outline/briefcase.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BriefcaseSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BriefcaseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Briefcase: Story = {}
