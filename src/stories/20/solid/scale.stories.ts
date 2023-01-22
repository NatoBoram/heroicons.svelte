import type { Meta, StoryObj } from '@storybook/svelte'
import ScaleSvelte from '../../../lib/20/solid/scale.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: ScaleSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<ScaleSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Scale: Story = {}
