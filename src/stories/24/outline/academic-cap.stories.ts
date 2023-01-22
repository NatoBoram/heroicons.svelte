import type { Meta, StoryObj } from '@storybook/svelte'
import AcademicCapSvelte from '../../../lib/24/outline/academic-cap.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: AcademicCapSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<AcademicCapSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AcademicCap: Story = {}
