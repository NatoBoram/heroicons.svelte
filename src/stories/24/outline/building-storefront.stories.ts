import type { Meta, StoryObj } from '@storybook/svelte'
import { BuildingStorefront as BuildingStorefrontSvelte } from '../../../lib/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: BuildingStorefrontSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<BuildingStorefrontSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingStorefront: Story = {}
