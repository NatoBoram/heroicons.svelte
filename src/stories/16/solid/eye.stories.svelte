<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSvelte from '../../../lib/16/solid/eye.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: EyeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Eye" />
