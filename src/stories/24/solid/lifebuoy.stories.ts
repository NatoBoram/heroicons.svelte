import type { Meta, StoryObj } from '@storybook/svelte'
import LifebuoySvelte from '../../../lib/24/solid/lifebuoy.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: LifebuoySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LifebuoySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Lifebuoy: Story = {}
