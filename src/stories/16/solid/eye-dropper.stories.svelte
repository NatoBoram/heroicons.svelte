<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeDropperSvelte from '../../../lib/16/solid/eye-dropper.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: EyeDropperSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="EyeDropper" />
