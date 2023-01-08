import type { Meta, StoryObj } from '@storybook/svelte'
import { BuildingOffice as BuildingOfficeSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: BuildingOfficeSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BuildingOfficeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingOffice: Story = {}
