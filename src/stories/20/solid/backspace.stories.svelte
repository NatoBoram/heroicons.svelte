<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BackspaceSvelte from '../../../lib/20/solid/backspace.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BackspaceSvelte,
		args: { class: '' },
	})
</script>

<Story name="Backspace" />
