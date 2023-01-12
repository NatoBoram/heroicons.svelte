import type { Meta, StoryObj } from '@storybook/svelte'
import { AcademicCap as AcademicCapSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: AcademicCapSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<AcademicCapSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const AcademicCap: Story = {}
