<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import LockOpenSvelte from '../../../lib/20/solid/lock-open.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: LockOpenSvelte,
		args: { class: '' },
	})
</script>

<Story name="LockOpen" />
