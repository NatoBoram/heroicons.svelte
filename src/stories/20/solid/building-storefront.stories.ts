import type { Meta, StoryObj } from '@storybook/svelte'
import BuildingStorefrontSvelte from '../../../lib/20/solid/building-storefront.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: BuildingStorefrontSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<BuildingStorefrontSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const BuildingStorefront: Story = {}
