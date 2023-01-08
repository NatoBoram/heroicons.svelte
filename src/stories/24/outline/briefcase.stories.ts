import type { Meta, StoryObj } from '@storybook/svelte'
import { Briefcase as BriefcaseSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: BriefcaseSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BriefcaseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Briefcase: Story = {}
