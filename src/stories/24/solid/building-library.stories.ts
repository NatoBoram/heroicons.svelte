import type { Meta, StoryObj } from '@storybook/svelte'
import BuildingLibrarySvelte from '../../../lib/24/solid/building-library.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: BuildingLibrarySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BuildingLibrarySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingLibrary: Story = {}
