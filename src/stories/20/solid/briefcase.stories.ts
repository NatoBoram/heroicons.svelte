import type { Meta, StoryObj } from '@storybook/svelte'
import BriefcaseSvelte from '../../../lib/20/solid/briefcase.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BriefcaseSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BriefcaseSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Briefcase: Story = {}
