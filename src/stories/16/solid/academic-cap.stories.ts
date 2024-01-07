import type { Meta, StoryObj } from '@storybook/svelte'
import AcademicCapSvelte from '../../../lib/16/solid/academic-cap.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: AcademicCapSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<AcademicCapSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AcademicCap: Story = {}
