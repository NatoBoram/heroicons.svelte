<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeDropperSvelte from '../../../lib/24/outline/eye-dropper.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: EyeDropperSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="EyeDropper" />
