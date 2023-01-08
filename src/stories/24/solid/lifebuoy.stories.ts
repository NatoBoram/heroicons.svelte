import type { Meta, StoryObj } from '@storybook/svelte'
import { Lifebuoy as LifebuoySvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Solid',
	component: LifebuoySvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LifebuoySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Lifebuoy: Story = {}
