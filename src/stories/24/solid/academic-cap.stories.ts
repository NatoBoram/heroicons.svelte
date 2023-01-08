import type { Meta, StoryObj } from '@storybook/svelte'
import { AcademicCap as AcademicCapSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: AcademicCapSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<AcademicCapSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AcademicCap: Story = {}
