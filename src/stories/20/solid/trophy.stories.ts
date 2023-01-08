import type { Meta, StoryObj } from '@storybook/svelte'
import { Trophy as TrophySvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: TrophySvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<TrophySvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Trophy: Story = {}
