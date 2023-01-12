import type { Meta, StoryObj } from '@storybook/svelte'
import { Briefcase as BriefcaseSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BriefcaseSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BriefcaseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Briefcase: Story = {}
