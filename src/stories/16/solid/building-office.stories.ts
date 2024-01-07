import type { Meta, StoryObj } from '@storybook/svelte'
import BuildingOfficeSvelte from '../../../lib/16/solid/building-office.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BuildingOfficeSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BuildingOfficeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingOffice: Story = {}
