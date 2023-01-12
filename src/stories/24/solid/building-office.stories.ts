import type { Meta, StoryObj } from '@storybook/svelte'
import { BuildingOffice as BuildingOfficeSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: BuildingOfficeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BuildingOfficeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingOffice: Story = {}
