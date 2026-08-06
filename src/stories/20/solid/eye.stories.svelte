<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EyeSvelte from '../../../lib/20/solid/eye.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: EyeSvelte,
		args: { class: '' },
	})
</script>

<Story name="Eye" />
