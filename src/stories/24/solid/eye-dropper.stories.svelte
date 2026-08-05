<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeDropperSvelte from '../../../lib/24/solid/eye-dropper.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: EyeDropperSvelte,
		args: { class: '' },
	})
</script>

<Story name="EyeDropper" />
