import type { Meta, StoryObj } from '@storybook/svelte'
import BuildingOfficeSvelte from '../../../lib/20/solid/building-office.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BuildingOfficeSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BuildingOfficeSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingOffice: Story = {}
