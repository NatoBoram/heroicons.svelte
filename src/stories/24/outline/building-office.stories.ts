import type { Meta, StoryObj } from '@storybook/svelte'
import BuildingOfficeSvelte from '../../../lib/24/outline/building-office.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: BuildingOfficeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BuildingOfficeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingOffice: Story = {}
