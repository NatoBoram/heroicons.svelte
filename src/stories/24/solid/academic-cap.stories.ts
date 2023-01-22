import type { Meta, StoryObj } from '@storybook/svelte'
import AcademicCapSvelte from '../../../lib/24/solid/academic-cap.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: AcademicCapSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<AcademicCapSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AcademicCap: Story = {}
