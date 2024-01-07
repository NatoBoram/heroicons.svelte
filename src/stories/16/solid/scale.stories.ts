import type { Meta, StoryObj } from '@storybook/svelte'
import ScaleSvelte from '../../../lib/16/solid/scale.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: ScaleSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<ScaleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {}
