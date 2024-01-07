import type { Meta, StoryObj } from '@storybook/svelte'
import BuildingStorefrontSvelte from '../../../lib/16/solid/building-storefront.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: BuildingStorefrontSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<BuildingStorefrontSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingStorefront: Story = {}
