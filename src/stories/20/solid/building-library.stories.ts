import type { Meta, StoryObj } from '@storybook/svelte'
import { BuildingLibrary as BuildingLibrarySvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: BuildingLibrarySvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BuildingLibrarySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingLibrary: Story = {}
