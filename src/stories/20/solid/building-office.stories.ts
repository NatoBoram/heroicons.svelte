import type { Meta, StoryObj } from '@storybook/svelte'
import { BuildingOffice as BuildingOfficeSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BuildingOfficeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BuildingOfficeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingOffice: Story = {}
